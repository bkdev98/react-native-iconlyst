import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTurnDownSquareBold = ({
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
      d="M16.385 15.687a.75.75 0 0 1-1.5 0v-4.283a2.173 2.173 0 0 0-2.17-2.171c-1.196 0-2.17.974-2.17 2.171v2.803l.665-.665a.75.75 0 1 1 1.061 1.061l-1.941 1.94a.74.74 0 0 1-1.075-.008l-1.933-1.932a.75.75 0 0 1 1.06-1.061l.663.663v-2.801a3.675 3.675 0 0 1 3.67-3.671 3.675 3.675 0 0 1 3.67 3.671zM15.974 2.75H8.027C4.721 2.75 2.5 4.873 2.5 8.033v8.435c0 3.159 2.221 5.282 5.527 5.282h7.947c3.306 0 5.526-2.123 5.526-5.282V8.034c0-3.16-2.22-5.284-5.526-5.284"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTurnDownSquareBold;
