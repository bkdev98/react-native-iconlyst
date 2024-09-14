import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileFavoriteBold = ({
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
      d="m10.542 11.661-.583 1.04 2.266 2.516L14.49 12.7l-.583-1.039z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m15.966 13.304-3.183 3.536a.75.75 0 0 1-1.115 0l-3.183-3.536a.75.75 0 0 1-.097-.87l1.06-1.89a.75.75 0 0 1 .655-.383h4.244a.75.75 0 0 1 .654.383l1.06 1.89a.75.75 0 0 1-.095.87m.653-7.94h-2.652a1.67 1.67 0 0 1-1.313-.656l-.856-1.14a2.65 2.65 0 0 0-2.111-1.055H7.812c-3.423 0-5.087 1.906-5.087 5.828v7.313c0 3.652 2.185 5.833 5.844 5.833h7.297c3.652 0 5.832-2.181 5.832-5.83l.027-4.66c0-3.843-1.622-5.633-5.106-5.633"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFolderFileFavoriteBold;
