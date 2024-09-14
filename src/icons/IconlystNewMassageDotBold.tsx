import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNewMassageDotBold = ({
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
      d="M12.487 16.304H7.72a.75.75 0 0 1 0-1.5h4.768a.75.75 0 0 1 0 1.5m-4.768-5.69h1.946a.75.75 0 0 1 0 1.5H7.72a.75.75 0 0 1 0-1.5m5.375-5.326c0-.905.217-1.758.593-2.52h-6.1c-3.118 0-5.214 2.192-5.214 5.455v7.845c0 3.26 2.096 5.453 5.214 5.453h8.324c3.12 0 5.215-2.192 5.215-5.453V10.52a5.7 5.7 0 0 1-2.309.49 5.73 5.73 0 0 1-5.723-5.722"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.77 8.19a2.86 2.86 0 0 0 2.857-2.855 2.86 2.86 0 0 0-2.857-2.856 2.86 2.86 0 0 0-2.854 2.856A2.86 2.86 0 0 0 18.77 8.19"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNewMassageDotBold;
