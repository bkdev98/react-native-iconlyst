import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLiveTvBulk = ({
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
      d="M22.334 11.436v5.46c0 2.49-2.03 4.53-4.52 4.53h-9.95c-2.49 0-4.53-2.04-4.53-4.53v-5.46c0-2.5 2.04-4.53 4.53-4.53h9.95a4.53 4.53 0 0 1 4.52 4.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.534 14.747a8 8 0 0 1-2.329 1.465c-.185.073-.349.082-.449.019-.11-.065-.146-.225-.156-.297a15.3 15.3 0 0 1-.002-3.247c.014-.106.055-.247.17-.313a.36.36 0 0 1 .18-.044q.113 0 .24.053a8.1 8.1 0 0 1 2.346 1.472c.11.099.24.256.24.444 0 .187-.13.346-.24.448m-1.77-3.75c-.596-.248-1.233-.218-1.747.078-.503.29-.825.795-.908 1.432a16.8 16.8 0 0 0 .001 3.597c.078.622.39 1.124.877 1.415a1.8 1.8 0 0 0 .933.252c.27 0 .552-.054.836-.164a9.5 9.5 0 0 0 2.786-1.75l.005-.004c.47-.431.727-.984.726-1.557 0-.572-.26-1.123-.729-1.55a9.6 9.6 0 0 0-2.78-1.748M17.894 3.895l-3.37 3.01h-3.34l-3.29-3.02a.747.747 0 0 1-.05-1.06c.28-.31.76-.33 1.06-.05l3.94 3.61 4.05-3.61c.31-.28.78-.25 1.06.06.27.3.25.78-.06 1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLiveTvBulk;
