import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentShieldBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.016 7.996c.673.007 1.608.01 2.4.007a.465.465 0 0 0 .332-.787c-.51-.534-1.218-1.279-1.93-2.027l-1.955-2.053a.46.46 0 0 0-.793.325V6.03c0 1.078.879 1.966 1.946 1.966"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M11.583 16.151a4.2 4.2 0 0 1-.806-.446c-.525-.378-.934-.888-.934-1.586 0-.526-.005-.917-.01-1.21l-.005-.204-.005-.29.085-.038c.187-.08.432-.173.687-.263.254-.09.508-.172.713-.23q.155-.044.248-.065l.028-.005.027.005q.093.02.248.065a13 13 0 0 1 1.484.53c0 .076-.002.17-.005.292l-.003.204c-.006.293-.012.683-.012 1.209 0 .698-.408 1.208-.933 1.586a4 4 0 0 1-.807.446"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.89 9.418h2.963c.241 0 .434.195.434.44v7.838c0 2.418-1.94 4.378-4.344 4.378H8.27c-2.51 0-4.557-2.057-4.557-4.592V6.972c0-2.419 1.95-4.398 4.354-4.398h5.155c.251 0 .444.205.444.448v3.14c0 1.784 1.458 3.247 3.224 3.256m-5.655.936c.085-.019.22-.045.348-.045.13 0 .263.026.349.045.103.023.22.053.339.087a15 15 0 0 1 1.578.557c.113.049.222.099.316.148.067.035.214.113.33.228l.004.004.008.008c.051.052.187.188.264.405.068.187.071.38.072.51q.001.17-.005.455l-.004.182c-.005.286-.01.667-.01 1.18 0 1.38-.837 2.286-1.557 2.804a5.6 5.6 0 0 1-1.42.732l-.03.01-.01.002-.004.002h-.001l-.053-.169.052.17a.75.75 0 0 1-.435 0l-.003-.001-.003-.002-.01-.003-.03-.01-.1-.034a5.553 5.553 0 0 1-1.32-.697c-.72-.518-1.557-1.424-1.557-2.803 0-.515-.005-.896-.01-1.182l-.004-.182q-.007-.284-.006-.455a1.5 1.5 0 0 1 .073-.511c.078-.218.215-.354.267-.405l.008-.008.001-.002a1.4 1.4 0 0 1 .33-.228c.094-.05.203-.1.316-.147a14.453 14.453 0 0 1 1.578-.557c.12-.035.236-.065.339-.088"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocumentShieldBold;