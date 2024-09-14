import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G fill={props.color} fillRule="nonzero">
      <Path
        d="m12.976 3.114 2.227 4.474c.164.324.477.55.838.6l5.001.728c.292.04.557.195.736.43.177.232.253.526.21.815-.035.24-.148.462-.32.633l-3.625 3.512a1.06 1.06 0 0 0-.32.964l.892 4.938c.095.597-.3 1.159-.893 1.272a1.17 1.17 0 0 1-.714-.114l-4.46-2.324a1.17 1.17 0 0 0-1.054 0l-4.461 2.324a1.143 1.143 0 0 1-1.532-.447 1.13 1.13 0 0 1-.116-.7l.892-4.94a1.06 1.06 0 0 0-.321-.964l-3.624-3.51a1.084 1.084 0 0 1-.029-1.533l.029-.03c.172-.174.398-.285.642-.314l5.001-.73c.36-.05.673-.274.838-.6l2.147-4.484a1.11 1.11 0 0 1 1.017-.614h.134c.373.045.698.276.865.614"
        opacity={0.4}
      />
      <Path d="M11.992 18.917a1.2 1.2 0 0 0-.552.151L7 21.388a1.16 1.16 0 0 1-1.497-.462 1.1 1.1 0 0 1-.116-.694l.887-4.929c.06-.358-.06-.722-.32-.975l-3.626-3.51a1.093 1.093 0 0 1 0-1.56c.172-.17.393-.282.632-.317l5.005-.737c.363-.046.677-.272.837-.6l2.176-4.54A1.11 1.11 0 0 1 12 2.501c-.008.297-.008 16.213-.008 16.415" />
    </G>
  </Svg>
);
export default IconlystStarBulk;
