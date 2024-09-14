import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingBagStarBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.01 20.263H7.585C4.758 20.263 3 18.267 3 15.443v-3.811M20.263 10.777V7.82c0-2.825-1.76-4.821-4.587-4.821h-8.09C4.768 3 3 4.996 3 7.821"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.065 8.582a3.432 3.432 0 1 1-6.866 0M13.784 17.01l1.453 1.397c.07.069.104.17.086.268l-.346 1.971a.3.3 0 0 0 .031.193.31.31 0 0 0 .415.127l1.788-.936a.3.3 0 0 1 .285 0l1.776.93c.061.03.13.041.198.03a.3.3 0 0 0 .25-.342l-.345-1.97c-.02-.1.014-.201.087-.27l1.444-1.398a.295.295 0 0 0 .033-.396.3.3 0 0 0-.203-.117l-1.994-.288a.31.31 0 0 1-.23-.168l-.89-1.792a.311.311 0 0 0-.374-.154.3.3 0 0 0-.176.154l-.89 1.79"
    />
  </Svg>
);
export default IconlystShoppingBagStarBroken;
