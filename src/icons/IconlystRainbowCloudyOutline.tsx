import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRainbowCloudyOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.864 16.16a.75.75 0 0 1 .75-.75 5.17 5.17 0 0 1 5.173 5.173.75.75 0 0 1-1.5 0 3.67 3.67 0 0 0-3.673-3.673.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.864 13.392a.75.75 0 0 1 .75-.75 7.94 7.94 0 0 1 7.941 7.94.75.75 0 0 1-1.5 0 6.44 6.44 0 0 0-6.44-6.44.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.864 10.565a.75.75 0 0 1 .75-.75c5.947 0 10.768 4.82 10.768 10.768a.75.75 0 0 1-1.5 0 9.27 9.27 0 0 0-9.268-9.268.75.75 0 0 1-.75-.75M13.327 4.068c.59-.778 1.536-1.4 2.883-1.4s2.294.622 2.883 1.4c.385.509.62 1.086.732 1.607a3.15 3.15 0 0 1 1.587.804c.607.58.953 1.4.953 2.366a3.24 3.24 0 0 1-1.932 2.965c-.462.185-.92.255-1.284.255h-5.881a3.5 3.5 0 0 1-1.308-.27 3.24 3.24 0 0 1-1.904-2.95c0-.966.346-1.787.953-2.366.44-.42.991-.688 1.587-.804.111-.52.346-1.098.731-1.607m1.197.905c-.362.478-.504 1.053-.504 1.386a.75.75 0 0 1-.744.75c-.516.004-.941.178-1.232.455-.284.271-.488.687-.488 1.28 0 .699.412 1.302 1.008 1.578.266.105.525.143.704.143h5.88c.183 0 .444-.037.712-.141a1.74 1.74 0 0 0 1.005-1.58c0-.593-.205-1.009-.489-1.28-.29-.277-.716-.45-1.232-.455a.75.75 0 0 1-.743-.75c0-.333-.142-.908-.504-1.386-.339-.447-.862-.806-1.687-.806s-1.348.359-1.687.806"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRainbowCloudyOutline;
