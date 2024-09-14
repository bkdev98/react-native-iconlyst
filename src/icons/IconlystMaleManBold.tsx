import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMaleManBold = ({
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
      d="m18.992 6.483-.004 1.753a1 1 0 0 0 2 .004l.009-4.097a1 1 0 0 0-.601-1.001 1 1 0 0 0-.401-.083l-4.18.008a1 1 0 1 0 .004 2l1.763-.003-2.299 2.299a7.598 7.598 0 1 0 1.399 1.43zm-4.39 2.95a5.598 5.598 0 1 0-8.008 7.825 5.598 5.598 0 0 0 8.008-7.826"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMaleManBold;
