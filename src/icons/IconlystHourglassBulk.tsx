import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHourglassBulk = ({
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
      d="M15.06 12.692c-.482-.498-.482-.887-.013-1.372 2.05-1.966 3.405-3.266 3.55-4.771.087-1.116-.218-2.137-.859-2.873-.616-.707-1.5-1.113-2.556-1.175l-.029-.001-4.88.001c-1.056.062-1.94.468-2.557 1.176-.64.736-.945 1.756-.855 2.881.143 1.496 1.497 2.795 3.534 4.75.482.497.482.885.014 1.371-2.05 1.967-3.405 3.267-3.549 4.771-.089 1.117.215 2.137.856 2.872.616.708 1.5 1.115 2.587 1.178l4.88-.001c1.055-.062 1.94-.469 2.555-1.176.641-.736.946-1.756.857-2.881-.143-1.496-1.498-2.796-3.535-4.75"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.697 12.01c.005.217.126.436.363.682 2.037 1.954 3.392 3.254 3.535 4.75.09 1.125-.216 2.145-.857 2.881-.616.707-1.5 1.114-2.556 1.176l-4.879.001c-1.087-.063-1.97-.47-2.587-1.178-.64-.735-.945-1.755-.856-2.872.144-1.504 1.498-2.804 3.55-4.77.23-.24.346-.455.349-.67z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHourglassBulk;
