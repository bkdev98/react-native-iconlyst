import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarGlowingBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="m6.491 17.906-1 1a.75.75 0 1 0 1.061 1.061l1-1a.75.75 0 1 0-1.06-1.06M18.55 17.885a.751.751 0 0 0-1.061 1.062l1.002 1a.751.751 0 0 0 1.06-1.062zM6.468 7.966a.75.75 0 0 0 1.06 0 .75.75 0 0 0 0-1.06l-1-1a.75.75 0 1 0-1.06 1.06zM17.998 8.166a.75.75 0 0 0 .53-.22l1.001-1a.75.75 0 0 0-1.06-1.061l-1 1a.75.75 0 0 0 .53 1.28M12.5 20.166a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-.75-.75M12.5 5.666a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-1.5 0v1c0 .414.336.75.75.75M4.545 12.166H3.5a.75.75 0 0 0 0 1.5h1.045a.75.75 0 0 0 0-1.5M21.5 12.166h-1.045a.75.75 0 0 0 0 1.5H21.5a.75.75 0 0 0 0-1.5" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m15.906 11.171-1.73-.259-.766-1.53c-.105-.209-.273-.372-.43-.435a1.01 1.01 0 0 0-1.388.435l-.783 1.54-1.686.246a.93.93 0 0 0-.615.3 1.02 1.02 0 0 0 .026 1.43l1.243 1.191-.295 1.688a1.012 1.012 0 0 0 1.004 1.177q.242.001.472-.115l1.552-.8 1.537.802a1 1 0 0 0 .62.1 1 1 0 0 0 .665-.399c.161-.219.23-.498.184-.772l-.292-1.683 1.243-1.19a1.03 1.03 0 0 0 .3-.597 1.02 1.02 0 0 0-.209-.759.97.97 0 0 0-.652-.37"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStarGlowingBulk;
