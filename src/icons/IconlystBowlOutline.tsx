import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBowlOutline = ({
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
      d="M21.74 8.948c.01.165.01.305.01.445 0 4.67-4.501 8.23-9.749 8.23-5.246 0-9.747-3.56-9.747-8.23 0-.142 0-.285.011-.452v-.008l.001-.03v-.007a1.3 1.3 0 0 1-.016-.203c0-.38.17-.69.374-.91.198-.22.456-.4.726-.55.541-.29 1.275-.53 2.118-.73 1.698-.38 4.006-.62 6.53-.62s4.832.24 6.53.62c.843.2 1.577.44 2.118.73.27.15.528.33.727.55.202.22.373.53.373.91q0 .086-.011.167l.003.043.001.03zM3.845 10.39C4.43 13.552 7.75 16.123 12 16.123c4.254 0 7.575-2.573 8.158-5.737a10 10 0 0 1-1.631.497c-1.698.39-4.006.62-6.53.62s-4.832-.23-6.53-.62c-.608-.137-1.16-.3-1.622-.493M3.84 8.693q.078.06.224.14c.37.2.953.41 1.739.59 1.558.35 3.749.58 6.195.58s4.636-.23 6.195-.58c.786-.18 1.37-.39 1.74-.59q.145-.08.223-.14a2 2 0 0 0-.224-.14c-.369-.2-.953-.4-1.74-.58-1.558-.36-3.748-.59-6.194-.59s-4.637.23-6.195.59c-.786.18-1.37.38-1.739.58q-.145.08-.224.14"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBowlOutline;
