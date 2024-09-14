import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoonWindyMoonLight = ({
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
      d="M16.287 20.362a8.82 8.82 0 0 0 4.843-5.596c.014-.049-.038-.089-.082-.065a7.92 7.92 0 0 1-7.3.065"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.388 5.996c.965.009 1.744.657 1.744 1.76a1.76 1.76 0 0 1-1.036 1.605 1.9 1.9 0 0 1-.706.144h-4.165c-.194 0-.45-.037-.711-.142a1.76 1.76 0 0 1-1.034-1.607c0-1.103.778-1.751 1.743-1.76 0-.694.545-2.082 2.083-2.082 1.537 0 2.082 1.388 2.082 2.082"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.115 13.243a1.207 1.207 0 0 1 2.21.676c0 .667-.487 1.208-1.208 1.208H4.072M5.005 21.436a1.082 1.082 0 0 0 1.98-.605c0-.599-.436-1.083-1.082-1.083H3.096M10.245 19.857a1.321 1.321 0 0 0 2.278-.911c0-.73-.484-1.307-1.321-1.321H6.063M3.913 12.354a8.77 8.77 0 0 1 6.359-8.438c.047-.014.087.038.064.082a7.93 7.93 0 0 0-.658 5.715"
    />
  </Svg>
);
export default IconlystMoonWindyMoonLight;
