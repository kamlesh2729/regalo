/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        titles: ["Poppins", "sans-serif"],
        text: ["Rubik", "sans-serif"],
      },
      fontSize: {
        qi: ["6.2rem"],
        h1: ["5.2rem"],
        h2: ["4.2rem"],
        ab: ["4.6rem"],
        bh2: ["3.2rem"],
        h4: ["2.2rem"],
        bt: ["2rem"],
        h3: ["2.4rem"],
        sp: ["2.7rem"],
        input: ["14px"],
        p: ["1.6rem"],
        str: ["1.5rem"],
        pn: ["1.7rem"],
        spn: ["1.8rem"],
        "4h": ["1.9rem"],
        title: ["3.6rem"],
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        5: "5",
        100: "100",
        200: "200",
        300: "300",
        50: "500",
        "9/6": "999999",
        90: "999",
      },
      boxShadow: {
        // "3xt": "0 10px 15px 0px rgba(255, 83, 48, 35%)",
        "3xt": "0 10px 15px 0px",
        // "3xr": "0 10px 15px 0px rgba(255, 83, 8, 60%)",
        "3xr": "0 10px 15px 0px",
        "1xr": "0 10px 15px 0px rgba(0, 0, 0, 0.1)",
        "2xt": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        "2xr": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        "3tb": "0 20px 10px 0px rgba(0, 0, 0, 8%)",
        "3ts": "0 20px 10px 0px rgba(0, 0, 0, 8%)",
        "2ts": "0 10px 20px 0px rgba(0, 0, 0, 10%)",
        "1ts": "0 3px 6px 0px rgba(0, 0, 0, 10%)",
      },
      width: {
        car: "65%",
        "11/11": "90%",
        team: "110rem",
        tbox: "33rem",
        mbox: "35rem",
        65: "17rem",
        61: "25rem",
        50: "50rem",
        54: "54rem",
        57: "14.5rem",
        83: "43rem",
        82: "83rem",
        81: "80rem",
      },
      maxWidth: {
        "3lx": "50rem",
        "3x4": "55rem",
        "8lx": "90vw",
        80: "80rem",
        44: "44rem",
        ab: "90rem",
      },
      height: {
        ht: "97vh",
        98: "27rem",
        83: "43rem",
        ho: "41vh",
      },
      margin: {
        m5r: "15rem",
        lb: "1.2rem",
        15: "3.7rem",
      },
      padding: {
        p5r: "15rem",
        in: "10px",
        ft: "14px",
        st: "16px",
        in2: "60px",
        18: "4.5rem",
        21: "5.5rem",
        22: "5.3rem",
      },
      colors: {
        "bg-gray": "#f8f8f8",
        "bg-white": "#ffffff",
        "text-black": "#010103",
        "text-orange": "#ff4d30",
        "btn-black": "#161616",
        "text-gray": "#706f7b",
        mo: "#00000044",
      },
      gridTemplateColumns: {
        inp: "27fr 21fr 21fr 21fr",
        ft1t: "27fr 21fr",
        ft2t: "21fr 21fr",
        hero: "1fr 1fr 1fr ",
        com: "1fr",
        con: "1fr 1fr 1fr",
        con2: "1fr 1fr",
        cona: "auto auto",
        mod: "260px 260px 260px 260px",
      },
      gridTemplateRows: {
        inp: "27fr 21fr 21fr 21fr",
        hero: "1fr 1fr",
        proud: "290px 290px",
        con: "1fr 1fr",
        ftT: "1fr",
        mod: "1fr 1fr 1fr",
        aut: "auto",
        aut2: "auto auto",
        aut3: "auto auto auto",
      },
      gap: {
        13: "3.2rem",
        "16/5": "4.5rem",
      },
      inset: {
        "2/2": "54%",
        tp: "40%",
        rt: "43%",
      },
      transitionDuration: {
        "1/5": "0.5s",
        all: "0.3s",
      },
      transitionProperty: {
        best: "all",
      },
      borderRadius: {
        round: "50%",
      },
      screens: {
        "mb-s": "319px",
        tab: "768px",
        "Lp-l": "1024px",
        desk: "1200px",
        "4k": "2560px",
      },
    },
  },
  plugins: [],
};
