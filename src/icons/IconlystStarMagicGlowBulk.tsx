import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarMagicGlowBulk = ({
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
      d="M20.382 15.261a1.46 1.46 0 0 0-.263-2.044l-2.524-1.909a.44.44 0 0 1-.174-.375l.173-3.178a1.43 1.43 0 0 0-.265-.92 1.444 1.444 0 0 0-2.005-.339l-2.638 1.84a.45.45 0 0 1-.418.052l-2.976-1.11-.022-.008a1.55 1.55 0 0 0-.876-.024 1.476 1.476 0 0 0-1.007 1.811l.896 3.048a.46.46 0 0 1-.086.417l-2.013 2.501a1.444 1.444 0 0 0 1.094 2.353l3.197.05c.142 0 .275.072.355.193l1.728 2.646c.178.279.446.485.73.571a1.42 1.42 0 0 0 1.109-.055c.353-.17.62-.469.747-.837l1.074-3.013a.46.46 0 0 1 .315-.294l3.09-.862c.316-.094.579-.274.759-.514"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.088 6.026a.75.75 0 0 0 .75-.75v-1.36a.75.75 0 0 0-1.5 0v1.36c0 .414.336.75.75.75M20.185 10.616a.8.8 0 0 0 .23-.036l.901-.29a.75.75 0 0 0-.459-1.428l-.9.29a.75.75 0 0 0 .228 1.464M5.135 11.476H3.914a.75.75 0 0 0 0 1.5h1.22a.75.75 0 0 0 0-1.5M10.055 19.484a.75.75 0 0 0-.947.478l-.316.96a.749.749 0 1 0 1.425.469l.316-.96a.75.75 0 0 0-.478-.947M19.345 19.015a.75.75 0 0 0-1.06-.038.75.75 0 0 0-.038 1.06l2.228 2.39a.747.747 0 0 0 1.06.038.75.75 0 0 0 .038-1.06z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStarMagicGlowBulk;
