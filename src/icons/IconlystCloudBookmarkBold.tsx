import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudBookmarkBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.508 8.185a.21.21 0 0 1-.183-.177c-.285-1.832-1.752-4.742-5.323-4.742s-5.04 2.91-5.325 4.742a.21.21 0 0 1-.183.177c-2.36.289-3.958 2.098-3.958 4.584a4.64 4.64 0 0 0 2.74 4.222c.499.201.956.297 1.313.34a.193.193 0 0 0 .215-.194v-2.673c0-2.233 1.692-3.792 4.116-3.792h2.24c2.422 0 4.114 1.586 4.114 3.857l.001 2.595c0 .117.1.21.217.194.349-.046.78-.14 1.256-.331a4.64 4.64 0 0 0 2.716-4.218c0-2.486-1.597-4.295-3.956-4.584"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.42 18.026a.75.75 0 0 0-.737 0l-1.63.913v-4.475c0-.203 0-.542.867-.542h2.24c.864 0 .864.351.864.607l.001 4.405zm.74-5.604h-2.24c-1.46 0-2.367.782-2.367 2.042v5.184a1.086 1.086 0 0 0 1.615.946l1.88-1.054 1.864 1.053a1.088 1.088 0 0 0 1.614-.946l-.002-5.118c0-1.3-.906-2.107-2.365-2.107"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudBookmarkBold;
