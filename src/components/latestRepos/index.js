import { useEffect, useState } from 'react';
import TimeAgo from 'react-timeago';
import Link from '../link';

export default () => {
  const [repos, setRepos] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('https://gh-latest-repos.frozzare.now.sh/')
      .then(r => r.json())
      .then(setRepos);

    fetch('https://api.github.com/users/frozzare/events/public')
      .then(r => r.json())
      .then(r => {
        setEvents(r.filter(p => p.type === 'PushEvent'));
      });
  }, []);

  const reposHtml = repos.map(repo => (
    <div className="w-full lg:w-1/2">
      <div className="p-2 pl-0">
        <h4 className="text-xl">
          <a href={repo.url} className="underline" rel="noopener noreferrer">{repo.name}</a>
          <span className="text-xs rounded py-1 px-2 ml-2" style={{backgroundColor: repo.primaryLanguage.color}}>{repo.primaryLanguage.name}</span>
        </h4>
        <p>{repo.description}</p>
      </div>
    </div>
  ));

  const latestCommit = events.slice(0, 1).map(event => {
    const commit = (event.payload.commits.pop() || {});
    const repo = (event.repo || {});
    return (
      <>
        <p><a href={(commit.url || '').replace('api.', '').replace('repos/', '').replace('commits', 'commit')} className="underline" rel="noopener noreferrer">{commit.message}</a></p>
        <p className="text-xs text-gray-500 pt-1"><TimeAgo date={event.created_at} /> in <a href={(repo.url || '').replace('api.', '').replace('repos/', '')} className="underline" rel="noopener noreferrer">{event.repo.name}</a></p>
      </>
    );
  });

  return (
    <div id="projects" className="bg-gray-100">
      <div className="container mx-auto px-10 lg:px-0 py-20">
        <div className="flex justify-center content-center min-h-screen">
          <div className="m-auto">
            <div className="flex justify-center">
              <div className="w-full lg:w-3/4">
                <h3 className="text-3xl pb-5">Selected projects</h3>
                <div className="flex flex-wrap pb-5">
                  <div className="w-full lg:w-1/2">
                    <div className="p-2 pl-0">
                      <h4 className="text-xl">
                        <a href="https://github.com/ylletjs/yllet/" className="underline" rel="noopener noreferrer">Yllet</a>
                        <span className="text-xs rounded py-1 px-2 ml-2" style={{backgroundColor: 'rgb(241, 224, 90)'}}>JavaScript</span>
                      </h4>
                      <p>Yllet is a set of packages for the WordPress API for both React and non-React projects.</p>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <div className="p-2 pl-0">
                      <h4 className="text-xl">
                        <a href="https://swedishtechevents.com/" className="underline" rel="noopener noreferrer">Swedish Tech Events</a>
                        <span className="text-xs rounded py-1 px-2 ml-2" style={{backgroundColor: 'rgb(241, 224, 90)'}}>JavaScript</span>
                      </h4>
                      <p>Events for developers, technologists, and other geeks in Sweden.</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-3xl pb-5">Latest repos</h3>
                <div className="flex flex-wrap pb-5">
                  {repos.length ? reposHtml : <p>Loading..</p>}
                </div>
                <h3 className="text-3xl pb-5">Latest commit</h3>
                {events.length ? latestCommit : <p>Loading...</p>}
                <p className='mt-5'><Link to='https://github.com/frozzare' title='Visit my GitHub profile' /></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
