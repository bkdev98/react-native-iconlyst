import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoatHanger2TwoTone = ({
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
      d="M12.518 11.316 4.583 14.55A1.74 1.74 0 0 0 3.5 16.16v.652c0 .96.778 1.74 1.74 1.74H19.76c.96 0 1.739-.78 1.739-1.74v-.653c0-.706-.427-1.343-1.08-1.61z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.517 11.316.001-.486c.002-.513.327-.958.805-1.146a2.2 2.2 0 0 0 1.304-2.673 2.16 2.16 0 0 0-1.507-1.484 2.198 2.198 0 0 0-2.792 2.114"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCoatHanger2TwoTone;
