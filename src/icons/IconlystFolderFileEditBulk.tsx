import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileEditBulk = ({
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
      d="M16.62 5.364h-2.652a1.66 1.66 0 0 1-1.313-.657l-.856-1.14a2.66 2.66 0 0 0-2.111-1.054H7.813c-3.424 0-5.088 1.907-5.088 5.829v7.312c0 3.652 2.185 5.833 5.845 5.833h7.296c3.652 0 5.833-2.181 5.833-5.83l.026-4.658c0-3.845-1.622-5.635-5.105-5.635"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m12.42 16.333 3.139-3.425a1.747 1.747 0 0 0-.095-2.473l-.671-.622a1.76 1.76 0 0 0-2.475.098l-3.181 3.474c-.35.391-.566.874-.624 1.398l-.08.75c-.053.491.122.967.48 1.307a1.56 1.56 0 0 0 1.336.406l.729-.121a2.5 2.5 0 0 0 1.443-.792m1.184-5.484c.062 0 .122.021.17.065l.671.622a.24.24 0 0 1 .08.172.25.25 0 0 1-.07.184l-3.146 3.433a1 1 0 0 1-.58.32l-.728.123-.077-.075.08-.749a1 1 0 0 1 .244-.55l3.171-3.465a.25.25 0 0 1 .185-.08"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFolderFileEditBulk;
