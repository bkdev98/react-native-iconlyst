import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVirusBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.25 21.324H8.033c-2.948 0-4.783-2.08-4.783-5.026V8.351c0-2.947 1.844-5.027 4.783-5.027h8.435c2.948 0 4.782 2.08 4.782 5.027v7.947c0 2.945-1.834 5.026-4.783 5.026h-.373"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.579 16.302h-.657a2.25 2.25 0 0 1-2.25-2.25v-1.49a2.25 2.25 0 0 1 2.25-2.25h.657a2.25 2.25 0 0 1 2.25 2.25v1.49a2.25 2.25 0 0 1-2.25 2.25"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.758 8.813.11.644c.1.593.504 1.09 1.065 1.313l1.174.459M9.673 12.559c-.8-.061-1.597-.138-2.523.234M7.758 16.52l.112-.646a1.72 1.72 0 0 1 1.064-1.309l.756-.292M14.816 14.273l.748.292c.561.225.966.72 1.071 1.31l.104.644M14.83 12.559c.801-.061 1.597-.138 2.523.234M16.744 8.813l-.11.644a1.72 1.72 0 0 1-1.065 1.313l-1.174.459M10.754 10.642V9.623a1.497 1.497 0 1 1 2.994 0v1.019"
    />
  </Svg>
);
export default IconlystVirusBroken;
