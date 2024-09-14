import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAntenaCloseBulk = ({
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
      d="M7.096 11.71a.75.75 0 0 0 1.061 0L9.867 10l1.708 1.71a.75.75 0 0 0 1.061 0 .75.75 0 0 0 0-1.06l-1.709-1.71 1.71-1.709a.75.75 0 1 0-1.062-1.061L9.866 7.88 8.157 6.17a.75.75 0 1 0-1.06 1.061L8.804 8.94l-1.709 1.71a.75.75 0 0 0 0 1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.05 2.684a2.32 2.32 0 0 0-2.562.513l-2.195 2.194a.2.2 0 0 0-.038.234 6.54 6.54 0 0 1 .673 2.89 6.577 6.577 0 0 1-6.577 6.577 6.54 6.54 0 0 1-2.892-.674.2.2 0 0 0-.234.038l-3.033 3.032a2.32 2.32 0 0 0-.508 2.564A2.31 2.31 0 0 0 4.855 21.5h14.296a2.35 2.35 0 0 0 2.35-2.349v-14.3c0-.967-.556-1.797-1.452-2.167"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystAntenaCloseBulk;
