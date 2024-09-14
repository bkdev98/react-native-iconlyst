import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscountBoldsharp = ({
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
      d="m9.908 15.73-1.06-1.061 5.535-5.535 1.06 1.06zm5.166-.373h-1.5l-.008-1.5h1.508zm-4.353-5.853v1.5h-1.5l-.006-1.5zm11.081 2.633a6.52 6.52 0 0 1-2.516-6.074l.09-.653-.654.09a6.53 6.53 0 0 1-6.074-2.517l-.398-.525-.399.525A6.52 6.52 0 0 1 5.777 5.5l-.653-.09.09.653a6.52 6.52 0 0 1-2.516 6.074l-.525.398.525.399a6.52 6.52 0 0 1 2.516 6.074l-.09.653.653-.09a6.53 6.53 0 0 1 6.074 2.516l.4.525.397-.525a6.53 6.53 0 0 1 6.074-2.516l.654.09-.09-.653a6.52 6.52 0 0 1 2.516-6.074l.525-.4z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDiscountBoldsharp;
