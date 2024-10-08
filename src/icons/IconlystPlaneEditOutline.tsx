import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneEditOutline = ({
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
      d="M7.148 16.229a4.4 4.4 0 0 1-4.075-3.037 204 204 0 0 1-.519-1.25.75.75 0 1 1 1.388-.57l.28.679c.538-.227 1.174-.5 1.806-.766l1.63-.691-1.964-4.758a.75.75 0 0 1 .442-.992c.185-.066.365-.136.543-.2a10 10 0 0 1 1.284-.428 2.66 2.66 0 0 1 2.44.75 182 182 0 0 1 3.44 3.069l.008.01c1.065-.465 2.038-.887 3.042-1.251a4 4 0 0 1 3.014.01 2.34 2.34 0 0 1 1.19 1.5c.444 1.578-.768 2.894-2.083 3.447a608 608 0 0 1-9.8 4.054 5.6 5.6 0 0 1-2.066.424m-2.275-2.825c.861 1.327 2.13 1.667 3.783 1a600 600 0 0 0 9.776-4.044c.607-.256 1.432-.91 1.221-1.66a.84.84 0 0 0-.433-.568 2.5 2.5 0 0 0-1.817.067c-.975.352-1.936.77-2.916 1.206a1.415 1.415 0 0 1-1.663-.274A179 179 0 0 0 9.415 6.09c-.545-.477-.877-.477-1.1-.421q-.477.123-.936.308l1.953 4.732a.75.75 0 0 1-.4.978c-.589.246-1.446.61-2.309.976zM12.801 20.947H5.115a.75.75 0 1 1 0-1.5h7.686a.75.75 0 0 1 0 1.5M16.047 21.085a1.6 1.6 0 0 1-1.585-1.772l.086-.787c.057-.534.28-1.036.638-1.435l3-3.3a1.78 1.78 0 0 1 1.251-.58c.475-.014.937.156 1.288.476l.7.647a1.79 1.79 0 0 1 .1 2.534l-2.95 3.25c-.39.434-.915.723-1.49.82l-.76.126a2 2 0 0 1-.278.02m-.092-1.61.12.107.757-.126c.24-.04.46-.16.622-.341l2.961-3.261a.3.3 0 0 0 .083-.216.3.3 0 0 0-.094-.2l-.7-.648a.26.26 0 0 0-.209-.077.3.3 0 0 0-.2.093l-2.989 3.29a1.06 1.06 0 0 0-.262.594l-.085.788z"
    />
  </Svg>
);
export default IconlystPlaneEditOutline;
