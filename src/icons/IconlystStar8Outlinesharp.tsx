import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStar8Outlinesharp = ({
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
      d="m12.25.017 2.289 8.02 8.089-2.028-5.8 5.991 5.8 5.991-8.09-2.027-2.288 8.019-2.289-8.02-8.088 2.028L7.673 12l-5.8-5.991L9.96 8.036zm0 5.466-1.245 4.361-4.399-1.102L9.761 12l-3.155 3.259 4.4-1.103 1.244 4.361 1.245-4.361 4.399 1.103L14.739 12l3.155-3.258-4.4 1.102z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStar8Outlinesharp;
