import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallOutlinesharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 26"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m6.729 2.863 3.927 5.394-1.725 2.996c.061.181.16.441.307.751a8.1 8.1 0 0 0 1.574 2.238 9.2 9.2 0 0 0 2.373 1.702c.333.166.613.28.806.351l2.987-1.72 5.538 4.084-.323.577c-.926 1.654-2.107 2.835-3.76 3.76l-.155.087-.177.008c-4.879.223-9.074-2.43-11.897-5.713-1.416-1.648-2.511-3.479-3.192-5.241-.677-1.75-.97-3.496-.698-4.95l.023-.127.066-.111c.934-1.607 2.141-2.804 3.74-3.742zm7.345 14.25-.2.724-.004-.002-.007-.002-.025-.007-.08-.025a9.594 9.594 0 0 1-1.242-.515 10.7 10.7 0 0 1-2.765-1.983 9.6 9.6 0 0 1-1.869-2.656 9 9 0 0 1-.375-.924 6 6 0 0 1-.108-.353l-.006-.024-.002-.008v-.003c0-.001 0-.002.729-.176l-.73.174-.069-.29 1.55-2.69-2.542-3.49a8.5 8.5 0 0 0-2.562 2.725c-.164 1.064.046 2.463.644 4.008.615 1.593 1.618 3.278 2.93 4.804 2.598 3.021 6.316 5.323 10.514 5.2 1.137-.664 1.989-1.463 2.688-2.532l-3.666-2.704-2.7 1.555-.302-.082z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCallOutlinesharp;
