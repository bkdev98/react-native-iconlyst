import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoFolderBulk = ({
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
      d="M17.229 5.366h-2.653a1.67 1.67 0 0 1-1.314-.65l-.855-1.14a2.65 2.65 0 0 0-2.111-1.06H8.421c-3.423 0-5.087 1.907-5.087 5.83v7.309c0 3.65 2.185 5.83 5.845 5.83h7.296c3.652 0 5.833-2.18 5.833-5.827l.026-4.652c0-3.848-1.623-5.64-5.105-5.64"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m15.46 14.757-.007.006a10.7 10.7 0 0 1-3.083 1.926 2.4 2.4 0 0 1-.907.184c-.35 0-.685-.088-.982-.262-.528-.311-.865-.853-.95-1.524a19 19 0 0 1 0-4.008c.09-.681.435-1.22.974-1.53.551-.317 1.234-.345 1.873-.078a10.5 10.5 0 0 1 3.08 1.939c.505.46.784 1.054.785 1.669.001.617-.277 1.212-.784 1.678m-3.964-3.967q.145 0 .307.066c.995.41 1.884.97 2.644 1.662.135.123.296.32.296.564.001.242-.159.441-.295.566a9.1 9.1 0 0 1-2.639 1.648c-.23.095-.432.102-.567.021-.16-.094-.208-.302-.22-.4a17 17 0 0 1-.003-3.656c.018-.137.074-.319.234-.412a.5.5 0 0 1 .243-.059"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVideoFolderBulk;
