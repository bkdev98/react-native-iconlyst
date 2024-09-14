import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartSymbolsOutline = ({
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
      d="M4.028 8.954c-.212 2.152.817 3.939 2.422 5.584 1.106 1.134 2.392 2.116 3.644 3.072.606.462 1.203.918 1.769 1.383l.004.003a.61.61 0 0 0 .616.085c.071-.027.133-.079.347-.255l.006-.004a72 72 0 0 1 1.6-1.26c1.307-1.01 2.657-2.053 3.783-3.252 1.568-1.67 2.534-3.478 2.223-5.643-.46-2.992-3.56-4.635-6.22-3.317a4.7 4.7 0 0 0-1.41 1.074.75.75 0 0 1-1.12 0 4.7 4.7 0 0 0-1.924-1.29h-.002c-2.78-.985-5.432.953-5.738 3.82m6.238-5.234C6.444 2.366 2.93 5.106 2.536 8.798v.006c-.276 2.79 1.097 4.995 2.84 6.782 1.182 1.211 2.627 2.316 3.923 3.307.579.442 1.127.861 1.61 1.257.58.483 1.412.616 2.117.329.315-.122.57-.337.714-.458l.048-.04c.445-.364.941-.748 1.463-1.151 1.342-1.037 2.848-2.201 4.062-3.493 1.714-1.826 3.019-4.074 2.613-6.887l-.001-.007c-.607-3.961-4.766-6.222-8.369-4.437m-3.29-.286a6.2 6.2 0 0 1 1.985 1.154 6.2 6.2 0 0 1 1.305-.868"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHeartSymbolsOutline;
