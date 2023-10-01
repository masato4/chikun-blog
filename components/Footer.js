import InstagramIcon from './icon/InstagramIcon';
import TwitterIcon from './icon/twitterIcon';

const Footer = () => {
  return (
    <footer className="bg-gray-100 flex flex-col justify-center">
      <div class="flex items-center mx-auto h-12 mt-4 justify-center">
        <p class="mr-4">Follow me:</p>
        <InstagramIcon />
        <TwitterIcon />
      </div>
      <div className="max-w-4xl w-full mx-auto h-12 mb-4 flex items-center justify-center">
        <div>© nudge-narrative-blog</div>
      </div>
    </footer>
  );
};

export default Footer;
