import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPoopBackBulk = ({
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
      d="m19.83 13.387.001-.078c0-1.835-1.245-3.415-2.92-3.82l.003-.035c.21-1.878-.88-3.499-3.154-4.605-.447-.219-.952-.467-1.464-.554a.5.5 0 0 0-.453.156c-.115.125-.158.3-.115.465.007.027.03.08.04.106.161.355.353 1.335-1.399 2.803l-.11.127c-.287.328-.739.84-.958 1.483-1.806.306-3.173 1.94-3.173 3.874l.002.085c-1.555.506-2.642 2.007-2.642 3.734 0 1.951 1.405 3.453 3.696 3.925 1.67.253 3.965.356 6.122.356 2.564 0 4.932-.146 5.824-.366 1.623-.41 3.358-1.656 3.358-3.915 0-1.742-1.094-3.246-2.658-3.74"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPoopBackBulk;
