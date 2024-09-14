import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMouseCursorOutline = ({
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
      d="M12.435 2.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75m7.031 2.719a.75.75 0 0 1 0 1.06l-1 1a.75.75 0 1 1-1.06-1.06l1-1a.75.75 0 0 1 1.06 0m-14.06.024a.75.75 0 0 1 1.06-.001l1 1a.75.75 0 0 1-1.06 1.06l-1-.999a.75.75 0 0 1 0-1.06M2.686 12.5a.75.75 0 0 1 .75-.75H4.48a.75.75 0 0 1 0 1.5H3.436a.75.75 0 0 1-.75-.75m16.955 0a.75.75 0 0 1 .75-.75h1.045a.75.75 0 1 1 0 1.5H20.39a.75.75 0 0 1-.75-.75m-2.214 4.969a.75.75 0 0 1 1.06 0l1 1a.75.75 0 0 1-1.06 1.06l-1-1a.75.75 0 0 1 0-1.06m-9.937.021a.75.75 0 0 1 0 1.061l-1 1a.75.75 0 0 1-1.061-1.06l1-1a.75.75 0 0 1 1.06 0m4.945 2.259a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75M10.845 10.293a.14.14 0 0 0-.004.086l.003.016.98 4.868c.01.038.026.057.04.07q.026.025.076.036a.15.15 0 0 0 .084-.008.13.13 0 0 0 .062-.057l.88-1.376a.96.96 0 0 1 .6-.42l1.826-.409a.13.13 0 0 0 .076-.04.15.15 0 0 0 .035-.076.15.15 0 0 0-.008-.084.13.13 0 0 0-.051-.06l-4.368-2.604-.017-.01a.13.13 0 0 0-.081-.025.15.15 0 0 0-.08.029.15.15 0 0 0-.053.064m1.007-1.341c-1.232-.77-2.788.324-2.477 1.746l.981 4.872.004.016c.32 1.425 2.202 1.76 2.99.526l.76-1.188 1.61-.36c1.43-.321 1.758-2.21.521-2.995l-.017-.01zm2.379 5.783"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMouseCursorOutline;
