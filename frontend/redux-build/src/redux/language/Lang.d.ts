export default interface ILanguage {
  userInfo: {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    cellphone: string;
    onceRegisteredAgreementAccepted: string;
    MyProfile: string;
    MySoftwares: string;
    MyBooks: string;
    MyTickets: string;
    Help: string;
    Activity: string;
    TimesShared: string;
    TimesLiked: string;
    TimesPosted: string;
    Followers: string;
    Website: string;
    Settings: string;
    Contact: string;
    PayingHistory: string;
    FirstAndLastName: string;
    FirstName: string;
    Lastname: string;
    ContactInfo: string;
    Work: string;
    WorkSite: string;
    Enterprise: string;
    Location: string;
    Country: string;
    City: string;
    ChangePassword: string;
    YourGithub: string;
    YourWebPage: string;
    SaveSettings: string;
    ShowPublicName: string;
    ShowPublicEmail: string;
    ShowPublicLocation: string;
    InformationSuccessfullySaved: string;
    TheresAnUserWithThatEmailAlready: string;
    NotRegisteredYet: string;
    SignUpHere: string;
  };
  signUpInfo: {
    passwordDoesntMatch: string;
    youMustEnterAPassword: string;
    youMustConfirmYourPassword: string;
    yourEmailIsWrong: string;
    youMustEnterAnEmail: string;
    youMustEnterAnUser: string;
    TheresAnUserWithThatEmail: string;
    TheresAnUserWithThatUsername: string;
    WrongEmailOrPassword: string;
  };
  buyInfo: {
    youNeedToBeLogged: string;
    buy: string;
  };
  libraryInfo: {
    recentBookUploads: string;
    uploadABook: string;
    filters: string;
    category: string;
    books: string;
    bookDescription: string;
    bookName: string;
    bookExtension: string;
    bookWeight: string;
    bookPrice: string;
    bookCategories: string;
    bookAuthor: string;
    bookPublisher: string;
    bookPublishingYear: string;
    bookWritingYear: string;
    myBookshelf: string;
    wishlist: string;
    recentCourseUploads: string;
    courses: string;
    courseName: string;
    courseDescription: string;
    courseAuthor: string;
    courseCategories: string;
    courseAproxDuration: string;
    courseKarma: string;
    uploadACourse: string;
    course: string;
    wishlistInfo: string;
    bookSectionInfo: string;
    courseSectionInfo: string;
    bookshelfInfo: string;
  };
  softwareInfo: {
    loginToshareAcomment: string;
    loginToUpload: string;
    uploadYourSoftware: string;
    signSelectFile: string;
    signSoftwareTitle: string;
    signSoftwareDescription: string;
    signSoftwareLanguage: string;
    frameworkSelection: string;
    signSoftwarePrice: string;
    upload: string;
    recentUploads: string;
    comments: string;
    totalViews: string;
    likes: string;
    mostPopulars: string;
    latestComments: string;
    signIssue: string;
    signEmail: string;
    signContent: string;
    sendEmail: string;
    price: string;
    description: string;
    delete: string;
    like: string;
    download: string;
    shareAcomment: string;
    signCommentName: string;
    signCommentEmail: string;
    signCommentContent: string;
    actionComment: string;
    userWhoUploaded: string;
  };
  ourServicesSection: {
    WebDesigns: string;
    WebDesignsDesc: string;
    WebDevelopment: string;
    WebDevelopmentDesc: string;
    ResponsiveDesigns: string;
    ResponsiveDesignsDesc: string;
    Consulting: string;
    ConsultingDesc: string;
    Databases: string;
    DatabasesDesc: string;
    AndroidIOS: string;
    AndroidIOSDesc: string;
  };
  sectionsInfo: {
    ourServices: string;
    contactUs: string;
    language: string;
    stats: string;
    aboutAurora: string;
    aboutAuroraContent: string;
    home: string;
    library: string;
    cancel: string;
    software: string;
    foro: string;
    login: string;
    register: string;
  };
  faq: {
    faq: string;
    howToUploadASoftware: string;
    htuSAnswer: string;
    howToUploadABook: string;
    htuBAnswer: string;
    howLongDoesItTakesForAnAnswer: string;
    hldtAnswer: string;
    whereToFindCookiesAndUserAgreement: string;
    wtfcAnswer: string;
    whereToFindAModerator: string;
    htfmAnswer: string;
  };
  userAgreementPolicy: {
    userAgreementModal: string;
    userAgreementTitle: string;
    userAgreementPolicyTitle: string;
    userAgreementPrivacyPolicyFP: string;
    userAgreementPrivacyPolicySP: string;
    userAgreementReceivedDataTitle: string;
    userAgreementReceivedData: string;
    userAgreementDataUseTitle: string;
    userAgreementDataUseFP: string;
    userAgreementDataUseSP: string;
    userAgreementCookiesFP: string;
    userAgreementCookiesSP: string;
    userAgreementCookiesTP: string;
    userAgreementThirdPartyLinksTitle: string;
    userAgreementThirdPartyLinks: string;
    userAgreementPersonalInformationControlTitle: string;
    userAgreementPersonalInformationControl: string;
    userAgreementAccept: string;
    userAgreementDecline: string;
  };
  errors: {
    error404: string;
    error403: string;
    error500: string;
    error503: string;
    error504: string;
  };
}
