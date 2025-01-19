import React from 'react';
import styled from 'styled-components';

const SkillSection = () => {
  return (
    <SkillWrapper>
      <h3 className="main-title">Skills</h3>
      <div className="section">
        {skills.map((d, i) => (
          <div key={i} className="item">
            <p className="name">{d.title}</p>
            <img className="logo" src={d.logo} alt="" />
          </div>
        ))}
      </div>
    </SkillWrapper>
  );
};

const skills = [
  { title: 'HTML', logo: 'https://www.princecodes.online/_next/image?url=%2Fhtml.png&w=96&q=75' },
  { title: 'CSS', logo: 'https://www.princecodes.online/_next/image?url=%2Fcss.png&w=96&q=75' },
  { title: 'React', logo: 'https://www.princecodes.online/_next/image?url=%2Freact.png&w=96&q=75' },
  { title: 'React-native', logo: 'https://www.princecodes.online/_next/image?url=%2FReactNative%20.png&w=96&q=75' },
  { title: 'Javascript', logo: 'https://www.princecodes.online/_next/image?url=%2Fjs.png&w=96&q=75' },
  { title: 'Typescript', logo: 'https://www.princecodes.online/_next/image?url=%2Fts.png&w=96&q=75' },
  {
    title: 'Bootstrap',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png',
  },
  { title: 'Tailwind', logo: 'https://www.princecodes.online/_next/image?url=%2Ftailwind.png&w=96&q=75' },
  { title: 'MUI', logo: 'https://www.princecodes.online/_next/image?url=%2Fmui.png&w=96&q=75' },
  { title: 'Redux', logo: 'https://www.princecodes.online/_next/image?url=%2Fredux.png&w=96&q=75' },
  { title: 'Node.js', logo: 'https://www.princecodes.online/_next/image?url=%2Fnode-js.png&w=96&q=75' },
  { title: 'Next.js', logo: 'https://www.princecodes.online/_next/image?url=%2Fnext.png&w=96&q=75' },
  { title: 'Express.js', logo: 'https://www.princecodes.online/_next/image?url=%2Fexpress.png&w=96&q=75' },
  { title: 'Git', logo: 'https://www.princecodes.online/_next/image?url=%2Fgit.png&w=96&q=75' },
  { title: 'AWS', logo: 'https://www.princecodes.online/aws.svg' },
  { title: 'Github', logo: 'https://www.princecodes.online/_next/image?url=%2Fgitwhite.png&w=96&q=75' },
  { title: 'Vercel', logo: 'https://cdn.worldvectorlogo.com/logos/vercel.svg' },
  {
    title: 'Docker',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw3Bfl60Cl4-mAwfc1rHLrk97suBwlSWuLaQ&s',
  },
  {
    title: 'Webpack',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg',
  },
  {
    title: 'Babel',
    logo: 'https://camo.githubusercontent.com/74767ae419f372b222ae2b5b9fd9de9843ac2c04ce20b6b28de53325cb7bf5f9/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f626162656c6a732f626162656c6a732d69636f6e2e737667',
  },
  { title: 'Figma', logo: 'https://www.princecodes.online/_next/image?url=%2Ffigma.png&w=64&q=75' },
  { title: 'Slack', logo: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/306_Slack_logo-512.png' },
];

const SkillWrapper = styled.div`
  width: 100%;
  padding: 2em;
  overflow-y: scroll;
  .main-title {
    color: var(--content-title-color);
  }
  .section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    font-size: 16px;
    gap: 10px;
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      color: #fff;
      border-radius: 14px;
      background-color: var(--content-bg);
      height: 147px;
      padding: 10px;
      border: 1px solid var(--theme-bg-color);
      p {
        margin: 0;
        padding-bottom: 20px;
      }
      .logo {
        width: 75px;
        height: 75px;
        object-fit: contain;
      }
    }
  }
`;
export default SkillSection;
