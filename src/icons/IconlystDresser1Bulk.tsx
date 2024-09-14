import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDresser1Bulk = ({
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
    <G fill={props.color} opacity={0.4}>
      <Path d="M10.948 2.375a.3.3 0 0 1 .3.3v16.82a.3.3 0 0 1-.3.3H7.085a4.4 4.4 0 0 1-1.752-.396v.004c-1.26-.606-2.04-1.884-2.04-3.568v-9.5c0-2.332 1.56-3.96 3.792-3.96zM13.048 2.375h3.866c2.269 0 3.793 1.592 3.793 3.96v9.5c0 1.686-.782 2.965-2.046 3.57-.542.237-.874.35-1.748.39h-3.865a.3.3 0 0 1-.3-.3V2.675a.3.3 0 0 1 .3-.3" />
    </G>
    <Path
      fill={props.color}
      d="M8.709 12.225a.75.75 0 0 0 1.5 0v-2.27a.75.75 0 0 0-1.5 0zM14.541 12.975a.75.75 0 0 0 .75-.75v-2.27a.75.75 0 0 0-1.5 0v2.27c0 .414.336.75.75.75M5.338 19.401v1.6a.75.75 0 0 0 1.5 0v-1.215a4.5 4.5 0 0 1-1.5-.385M17.16 19.78V21a.75.75 0 0 0 1.5 0v-1.595c-.486.214-.804.326-1.5.375"
    />
  </Svg>
);
export default IconlystDresser1Bulk;
