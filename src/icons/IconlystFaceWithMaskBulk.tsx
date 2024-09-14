import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFaceWithMaskBulk = ({
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
      d="M6.117 13.176a.2.2 0 0 0 .158.023 30 30 0 0 0 4.405-1.589 4.8 4.8 0 0 1 3.878-.001c1.558.694 2.962 1.22 4.198 1.583a.2.2 0 0 0 .162-.022l2.942-1.84c.063-.04.1-.111.093-.185C21.518 6.307 17.449 2.5 12.5 2.5s-9.016 3.805-9.453 8.642a.2.2 0 0 0 .093.185z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.083 8.453c.834-1.084 2.53-1.083 3.364 0a.75.75 0 1 1-1.187.916c-.077-.1-.244-.268-.495-.268-.25 0-.417.168-.495.268a.75.75 0 0 1-1.187-.916M13.552 8.455c.83-1.085 2.53-1.086 3.364-.002a.75.75 0 0 1-1.187.917c-.078-.1-.245-.268-.495-.268s-.416.166-.493.266a.75.75 0 0 1-1.052.139.75.75 0 0 1-.137-1.053M5.39 14.58a.2.2 0 0 0-.092-.144l-1.89-1.174a.193.193 0 0 0-.295.191 9.47 9.47 0 0 0 2.433 5.006c.129.139.35.029.325-.158zM17.39 20.024l.712-5.285a.2.2 0 0 0-.14-.219 37 37 0 0 1-4.013-1.537 3.3 3.3 0 0 0-2.66.001 32 32 0 0 1-4.219 1.55.2.2 0 0 0-.144.22l.682 5.276c.007.06.025.118.078.149a9.4 9.4 0 0 0 4.813 1.324 9.4 9.4 0 0 0 4.809-1.321c.055-.033.073-.094.082-.158M19.729 14.434a.2.2 0 0 0-.092.143l-.5 3.714c-.026.187.195.298.324.159a9.46 9.46 0 0 0 2.423-4.988.193.193 0 0 0-.296-.19z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFaceWithMaskBulk;
