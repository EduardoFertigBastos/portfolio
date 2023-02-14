import { enAddPosts, ptAddPosts } from './projects/addpost';
import { enAnalysis, ptAnalysis } from './projects/analysis';
import { enByNani, ptByNani } from './projects/bynani';
import { enClinica, ptClinica } from './projects/clinica';
import { enEcoleta, ptEcoleta } from './projects/ecoleta';
import { enGithubUsers, ptGithubUsers } from './projects/githubusers';
import { enPfcli, ptPfcli } from './projects/pfcli';
import { enSpotifyCity, ptSpotifyCity } from './projects/spotifycity';

const dataset = {
  en: {
    title: 'Portfolio',
    subtitle1: 'Click here',
    subtitle2: ' to see all.',
    seemore: 'See more',
    projects: [
      enPfcli,
      enClinica,
      enByNani,
      enEcoleta,
      enAddPosts,
      enAnalysis,
      enSpotifyCity,
      enGithubUsers,
    ]
  },
  pt: {
    title: 'Portfólio',
    subtitle1: 'Clique aqui',
    subtitle2: ' para ver tudo.',
    seemore: 'Veja mais',
    projects: [
      ptPfcli,
      ptClinica,
      ptByNani,
      ptEcoleta,
      ptAddPosts,
      ptAnalysis,
      ptSpotifyCity,
      ptGithubUsers,

    ]
  },

}

export default dataset;