import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWavingHandBold = ({
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
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.95 17.034a.753.753 0 0 0-.925-.52.75.75 0 0 0-.52.924c.214.764.659 2.353 2.483 3.57a.75.75 0 0 0 .831-1.249c-1.362-.909-1.68-2.045-1.87-2.725M19.324 3.774a.744.744 0 0 0-.997.34.753.753 0 0 0 .332 1.005c.056.028 1.369.72 1.364 2.556a.75.75 0 0 0 .747.752h.003a.75.75 0 0 0 .75-.748c.008-2.8-2.11-3.861-2.2-3.905M19.285 10.12c-.239-.53-.863-1.783-1.71-3.438a1.12 1.12 0 0 0-1.507-.496 1.91 1.91 0 0 0-.844 2.568l.696 1.379a.43.43 0 0 1-.192.586c-.792.4-1.412 1.133-1.702 2.014-.283.893-.217 1.824.187 2.624a.437.437 0 0 1-.778.393 4.3 4.3 0 0 1-.23-3.296 4.34 4.34 0 0 1 1.65-2.22l.104-.072-3.324-6.578c-.376-.686-1.265-.949-1.982-.586-.685.345-1.002 1.181-.717 1.917l1.908 3.776a.43.43 0 0 1-.192.584.437.437 0 0 1-.586-.191L7.47 3.946c-.376-.687-1.266-.95-1.983-.588a1.51 1.51 0 0 0-.69 1.97l2.934 5.808a.43.43 0 0 1-.192.585.43.43 0 0 1-.585-.193L5.414 8.48c-.372-.733-1.3-1.042-2.028-.674a1.53 1.53 0 0 0-.75.882c-.129.395-.102.793.081 1.155L6.4 17.13a7.3 7.3 0 0 0 4.256 3.665 7.29 7.29 0 0 0 5.602-.427 7.39 7.39 0 0 0 3.666-4.256c.751-2.31.098-4.326-.639-5.993"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWavingHandBold;
