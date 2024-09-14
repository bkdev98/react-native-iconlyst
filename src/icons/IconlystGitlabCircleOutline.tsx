import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGitlabCircleOutline = ({
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
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.201 6.996a.75.75 0 0 1 .711.514l.945 2.843h2.292l.937-2.842a.75.75 0 0 1 1.424-.002l1.733 5.192a.75.75 0 0 1-.268.843l-4.535 3.318a.75.75 0 0 1-.886 0l-4.53-3.318a.75.75 0 0 1-.269-.843L8.49 7.51a.75.75 0 0 1 .712-.513m-.85 5.661 3.646 2.67 3.65-2.67-.844-2.529-.399 1.21a.75.75 0 0 1-.712.515h-3.376a.75.75 0 0 1-.712-.514l-.405-1.22z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGitlabCircleOutline;
