import { computed, signal } from '@angular/core';

export const selectedLanguageIndex = signal(0);
export const selectedLanguage = computed(
  () => languages[selectedLanguageIndex()]
);
export const selectedLanguagePack = computed(() => selectedLanguage().pack);

export const languages = [
  {
    name: '',
    imageUrl: '',
    pack: {
      categories: {
        linguistic: '',
        literature: '',
        foreign_literature: '',
      },
      header: {
        home: '',
        facultyOfLetters: '',
        university: '',
        annals: '',
        submissions: '',
        forAuthors: '',
        forReviewers: '',
        index: '',
        sponsors: '',
        contact: '',
        linguistics: '',
        literature: '',
        foreignLiterature: '',
        currentIssue: '',
        archive: ''
      },
      homePage: {
        title: '',
        text: '',
      },
      aboutUsPage: {
      },
      footer: {
        termsAndCond: '',
      },
    },
  },
  {
    name: 'Română',
    imageUrl: '/images/languages/romania.webp',
    pack: {
      categories: {
        linguistic: 'Lingvistică',
        literature: 'Literatură',
        foreign_literature: 'Limbi și Literatură străină',
      },
      header: {
        home: 'Acasă',
        facultyOfLetters: 'Facultatea de Litere',
        university: 'Universitatea Alexandru Ioan Cuza Iași',
        annals: 'Anale',
        submissions: 'Trimiteri',
        forAuthors: 'Pentru autori',
        forReviewers: 'Pentru recenzori',
        index: 'Index',
        sponsors: 'Sponsori',
        contact: 'Contact',
        linguistic: 'Lingvistică',
        literature: 'Literatură',
        foreignLiterature: 'Literatură străină',
        currentIssue: 'Număr curent',
        archive: 'Arhivă'
      }
    },
  },
  {
    name: 'English',
    imageUrl: '/images/languages/english.webp',
    pack: {
      categories: {
        linguistic: 'Linguistic',
        literature: 'Literature',
        foreign_literature: 'Foreign Literature',
      },
      header: {
        home: 'Home',
        facultyOfLetters: 'Faculty of Letters',
        university: 'Alexandru Ioan Cuza University Iași',
        annals: 'Annals',
        submissions: 'Submissions',
        forAuthors: 'For Authors',
        forReviewers: 'For Reviewers',
        index: 'Index',
        sponsors: 'Sponsors',
        contact: 'Contact',
        linguistic: 'Linguistic',
        literature: 'Literature',
        foreignLiterature: 'Foreign Literature',
        currentIssue: 'Current Issue',
        archive: 'Archive'
      }
    }      
  },
];
