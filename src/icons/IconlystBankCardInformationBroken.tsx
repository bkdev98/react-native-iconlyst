import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCardInformationBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.25 19.459h5.036c2.444 0 3.964-1.725 3.964-4.166V8.706c0-2.442-1.52-4.166-3.965-4.166H7.215c-2.443 0-3.963 1.724-3.963 4.166v6.587c0 2.441 1.527 4.166 3.963 4.166h1.788M3.25 9.124h14.68M6.68 15.437h3.413M6.68 12.716h2.534"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.556 15.69h1.275a.99.99 0 0 0 .989-.989V13.45a.99.99 0 0 0-.989-.988h-1.275a.99.99 0 0 0-.989.988v1.252c0 .546.443.989.989.989"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBankCardInformationBroken;
