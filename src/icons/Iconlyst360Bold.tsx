import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst360Bold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.001 12.758a.76.76 0 0 0 0 1.52.76.76 0 0 0 0-1.52M16.732 10.858a.597.597 0 0 0-.598.595v2.231a.598.598 0 0 0 1.194 0v-2.23a.597.597 0 0 0-.596-.596"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.038 8.295a.75.75 0 0 1-1.5 0c0-.414.336-.77.75-.77s.75.317.75.73zm-.21 5.389a2.1 2.1 0 0 1-2.097 2.097 2.1 2.1 0 0 1-2.096-2.097v-2.231c0-1.155.94-2.095 2.096-2.095s2.097.94 2.097 2.095zm-6.827 2.094a2.263 2.263 0 0 1-2.26-2.26c0-.482.155-.927.413-1.295.006-.008.007-.02.014-.027l2.035-2.56a.75.75 0 0 1 1.174.934l-.65.818a2.26 2.26 0 0 1 1.534 2.13 2.263 2.263 0 0 1-2.26 2.26m-4.933.082a2.28 2.28 0 0 1-1.624-.673.75.75 0 1 1 1.063-1.06.793.793 0 1 0 .561-1.354.75.75 0 0 1-.584-1.22l.562-.695H5.923a.75.75 0 0 1 0-1.5h2.692a.75.75 0 0 1 .584 1.22l-.868 1.076a2.3 2.3 0 0 1 1.03 1.914 2.295 2.295 0 0 1-2.293 2.292M17.34 4.758H6.66c-2.488 0-4.16 1.746-4.16 4.346v6.393c0 2.6 1.672 4.347 4.16 4.347h10.679c2.489 0 4.161-1.747 4.161-4.347V9.104c0-2.6-1.672-4.346-4.16-4.346"
      clipRule="evenodd"
    />
  </Svg>
);
export default Iconlyst360Bold;
