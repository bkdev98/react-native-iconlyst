import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallOffDownBold = ({
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
      d="M21.998 8.567c.005-.348.016-1.27-.872-2.169-1.365-1.383-4.269-2.084-8.628-2.084-4.357 0-7.259.7-8.624 2.082-.887.898-.876 1.822-.872 2.17L3 8.674c0 1.572.212 2.419.731 2.926.606.59 1.461.566 2.639.54q.423-.013.918-.014c1.584 0 1.998-.95 2.33-1.71.394-.903.734-1.68 2.88-1.68s2.488.777 2.883 1.68c.333.76.748 1.71 2.331 1.71q.501.002.929.014.37.01.699.012c.822 0 1.452-.083 1.929-.548.519-.506.731-1.354.731-2.93 0-.017 0-.088-.002-.107"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m14.487 15.877-1.237 1.242v-4.453a.75.75 0 0 0-1.5 0v4.453l-1.237-1.242a.749.749 0 1 0-1.062 1.059l2.516 2.528q.105.106.245.164a.7.7 0 0 0 .222.044c.022.002.042.014.066.014.1 0 .2-.02.29-.058.055-.023.098-.064.145-.098.031-.023.07-.037.097-.065l2.517-2.53a.75.75 0 1 0-1.062-1.058"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPhoneCallOffDownBold;
