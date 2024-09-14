import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtoneCheck2Bulk = ({
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
      d="M11.999 20.098a2.354 2.354 0 0 0 2.35-2.35h1.5a3.855 3.855 0 0 1-3.85 3.85 3.853 3.853 0 0 1-3.848-3.85h1.5a2.35 2.35 0 0 0 2.348 2.35"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.648 17.759h7.824c.958 0 1.837-.483 2.35-1.292a2.77 2.77 0 0 0 .168-2.675l-.466-.99a4.8 4.8 0 0 1-.456-2.043l-.001-1.318c0-3.896-3.17-7.066-7.067-7.066-3.895 0-7.065 3.17-7.065 7.066l-.001 1.318c0 .699-.158 1.406-.457 2.043l-.466.99a2.77 2.77 0 0 0 .168 2.675 2.77 2.77 0 0 0 2.35 1.292h3.119"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m14.675 9.638-2.923 2.925a.748.748 0 0 1-1.061-.001l-1.419-1.42a.749.749 0 1 1 1.061-1.059l.888.888 2.393-2.394a.75.75 0 1 1 1.061 1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRingtoneCheck2Bulk;
