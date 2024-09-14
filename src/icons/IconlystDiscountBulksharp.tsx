import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscountBulksharp = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M21.802 12.137a6.52 6.52 0 0 1-2.516-6.074l.09-.653-.654.09a6.53 6.53 0 0 1-6.074-2.517l-.398-.525-.399.525A6.52 6.52 0 0 1 5.777 5.5l-.653-.09.09.653a6.52 6.52 0 0 1-2.516 6.074l-.525.398.525.399a6.52 6.52 0 0 1 2.516 6.074l-.09.653.653-.09a6.53 6.53 0 0 1 6.074 2.516l.4.525.397-.525a6.53 6.53 0 0 1 6.074-2.516l.654.09-.09-.653a6.52 6.52 0 0 1 2.516-6.074l.525-.4z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m8.847 14.668 1.061 1.061 5.535-5.535-1.06-1.06zM13.574 15.356h1.5v-1.5h-1.508zM10.721 11.003v-1.5H9.215l.006 1.5z"
    />
  </Svg>
);
export default IconlystDiscountBulksharp;
