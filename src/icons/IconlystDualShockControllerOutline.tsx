import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDualShockControllerOutline = ({
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
      d="M6.078 19.052a4.5 4.5 0 0 1-1.564-.29c-2.085-.85-2.027-3.22-2.008-4 0-.04.12-7.455 3.439-9.189l.166-.077a4.67 4.67 0 0 1 4.674.147c1.239.738 1.55.865 2.922.008a4.67 4.67 0 0 1 4.7-.148l.108.05q.02.008.042.02c3.338 1.745 3.44 9.151 3.438 9.224.02.743.08 3.114-1.983 3.955a3.83 3.83 0 0 1-3.677-.365 4.2 4.2 0 0 1-.841-.873c-.24-.355-.56-.65-.934-.86a7.26 7.26 0 0 0-4.616-.006 2.77 2.77 0 0 0-.99.9 3.5 3.5 0 0 1-.793.84 3.46 3.46 0 0 1-2.083.664M8.342 6.433a3.66 3.66 0 0 0-1.6.422l-.146.067c-2.135 1.118-2.6 6.841-2.593 7.847-.047 1.9.536 2.384 1.05 2.594a2.26 2.26 0 0 0 2.218-.18q.282-.222.477-.523a4.2 4.2 0 0 1 1.448-1.31 8.43 8.43 0 0 1 6.1 0 4.25 4.25 0 0 1 1.388 1.251c.152.22.336.418.546.586a2.28 2.28 0 0 0 2.242.171c.489-.2 1.073-.68 1.025-2.555.007-1.035-.447-6.728-2.617-7.888l-.1-.045a3.2 3.2 0 0 0-3.283.057c-1.864 1.166-2.8 1.015-4.483.008a3.24 3.24 0 0 0-1.672-.502"
    />
    <Path
      fill={props.color}
      d="M14.825 11.911a.745.745 0 0 1-.75-.745v-.01a.75.75 0 1 1 .75.755M17.694 11.911a.745.745 0 0 1-.75-.745v-.01a.75.75 0 1 1 .75.755M16.264 10.477a.755.755 0 0 1-.7-1.037.75.75 0 0 1 .69-.463h.01a.75.75 0 1 1 0 1.5M16.264 13.346a.755.755 0 0 1-.7-1.037.75.75 0 0 1 .69-.463h.01a.75.75 0 1 1 0 1.5M8.251 13.34a2.186 2.186 0 1 1-.001-4.37 2.186 2.186 0 0 1 .001 4.37m0-2.87a.685.685 0 1 0-.002 1.37.685.685 0 0 0 .002-1.37"
    />
  </Svg>
);
export default IconlystDualShockControllerOutline;
