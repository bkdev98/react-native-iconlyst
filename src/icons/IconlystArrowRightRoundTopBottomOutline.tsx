import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowRightRoundTopBottomOutline = ({
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
      d="M5.106 5.105A9.72 9.72 0 0 1 12 2.25a9.72 9.72 0 0 1 6.895 2.855.75.75 0 1 1-1.061 1.061A8.22 8.22 0 0 0 12 3.75c-2.278 0-4.34.922-5.833 2.416a.75.75 0 0 1-1.061-1.06M12.47 8.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.061l-3 3a.75.75 0 0 1-1.06-1.06l1.72-1.72H8a.75.75 0 0 1 0-1.5h6.19l-1.72-1.72a.75.75 0 0 1 0-1.06m6.425 9.364a.75.75 0 0 1 0 1.061A9.72 9.72 0 0 1 12 21.75a9.72 9.72 0 0 1-6.894-2.856.75.75 0 0 1 1.06-1.06A8.22 8.22 0 0 0 12 20.25c2.279 0 4.34-.923 5.834-2.417a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowRightRoundTopBottomOutline;
