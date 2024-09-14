import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTurnUpSquareBold = ({
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
      d="M16.679 10.958a.75.75 0 0 1-1.061 0l-.663-.663v2.801a3.675 3.675 0 0 1-3.67 3.671 3.674 3.674 0 0 1-3.669-3.671V8.813a.75.75 0 1 1 1.5 0v4.283c0 1.197.973 2.171 2.169 2.171s2.17-.974 2.17-2.171v-2.803l-.665.665a.749.749 0 1 1-1.06-1.061l1.94-1.94a.743.743 0 0 1 1.076.008l1.933 1.932a.75.75 0 0 1 0 1.061m-.705-8.208H8.027C4.721 2.75 2.5 4.873 2.5 8.032v8.434c0 3.16 2.221 5.284 5.527 5.284h7.947c3.306 0 5.526-2.123 5.526-5.283V8.032c0-3.159-2.22-5.282-5.526-5.282"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTurnUpSquareBold;
