import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRightAirpodOutline = ({
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
      d="M5.197 4.848C4.457 5.526 4 6.438 4 7.373V17.47a.805.805 0 0 0 1.61 0v-6.232a.75.75 0 0 1 .75-.75H7.48a3.64 3.64 0 0 0 2.887-1.416V9.07c.16-.21.25-.489.25-.792V5.943c0-.302-.09-.583-.252-.797A3.35 3.35 0 0 0 7.87 3.82c-.956-.044-1.93.35-2.672 1.028M4.185 3.741c.995-.91 2.348-1.484 3.755-1.42h.003c1.474.076 2.78.81 3.62 1.92.378.5.556 1.108.556 1.702v2.335c0 .591-.175 1.2-.557 1.7a5.14 5.14 0 0 1-4.08 2.01h-.373v5.482a2.304 2.304 0 1 1-4.609 0V7.373c0-1.428.69-2.722 1.685-3.632m12.47 3.327a1.773 1.773 0 0 0-2.029-1.474.75.75 0 0 1-.235-1.482 3.273 3.273 0 0 1 3.745 2.723.75.75 0 0 1-1.482.233M8.52 5.745a.75.75 0 0 1 .75.75v1.36a.75.75 0 0 1-1.5 0v-1.36a.75.75 0 0 1 .75-.75m1.384 9.891a6.048 6.048 0 1 1 12.095 0 6.048 6.048 0 0 1-12.095 0m6.048-4.547a4.548 4.548 0 1 0 0 9.095 4.548 4.548 0 0 0 0-9.095m-1.848 2.432a.75.75 0 0 1 .75-.75h1.5a1.957 1.957 0 0 1 .933 3.678l.574.9a.75.75 0 1 1-1.265.806l-.936-1.47h-.056v1.067a.75.75 0 0 1-1.5 0zm1.5 1.664v-.915h.75a.457.457 0 1 1 0 .915z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRightAirpodOutline;
