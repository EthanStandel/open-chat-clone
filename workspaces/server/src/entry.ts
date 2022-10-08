(() =>
  import("./Application")
    .then(({ main }) => main())
    .catch(async e => {
      console.error(e);
      process.exit(1);
    }))();
