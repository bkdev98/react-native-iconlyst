import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWorldLocationOutline = ({
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
      d="M12.247 3.75a7.944 7.944 0 0 0-7.941 7.941 7.945 7.945 0 0 0 7.296 7.925.75.75 0 1 1-.121 1.495 9.445 9.445 0 0 1-8.675-9.42c0-5.207 4.224-9.441 9.44-9.441 4.825 0 8.793 3.616 9.363 8.283a.75.75 0 1 1-1.489.181 7.933 7.933 0 0 0-7.873-6.964"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.72 4.245c.55-1.047 1.384-1.995 2.527-1.995 1.147 0 1.982.947 2.532 1.996.58 1.105 1.007 2.614 1.24 4.32.104.706.17 1.446.197 2.211a.75.75 0 1 1-1.499.055 19 19 0 0 0-.182-2.053l-.001-.007c-.22-1.602-.61-2.928-1.083-3.83-.504-.959-.958-1.192-1.204-1.192-.241 0-.695.232-1.2 1.193-.474.902-.867 2.227-1.086 3.83v.005c-.131.902-.201 1.879-.201 2.913s.07 2.02.2 2.922l.001.005c.302 2.191 1.233 4.251 2.135 5.24a.75.75 0 1 1-1.109 1.01c-1.159-1.27-2.18-3.64-2.512-6.043a22 22 0 0 1-.215-3.134c0-1.1.074-2.148.215-3.125.233-1.707.663-3.215 1.244-4.321"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.806 11.7a.75.75 0 0 1 .75-.75h8.298a.75.75 0 0 1 0 1.5H3.556a.75.75 0 0 1-.75-.75M17.586 13.719a2.61 2.61 0 0 0-2.607 2.608c0 .92.56 1.914 1.288 2.734a7 7 0 0 0 1.014.941q.186.135.305.203.12-.067.306-.203a7 7 0 0 0 1.014-.941c.728-.82 1.288-1.814 1.288-2.734a2.61 2.61 0 0 0-2.608-2.608m-.12 6.546.003-.002zm-3.987-3.9379999999999997a4.108 4.108 0 1 1 8.215 0c0 1.469-.85 2.811-1.666 3.73-.42.472-.861.868-1.244 1.151-.191.141-.38.263-.552.353-.137.072-.381.188-.646.188-.264 0-.509-.116-.645-.188a4 4 0 0 1-.552-.353 8.4 8.4 0 0 1-1.244-1.15c-.816-.92-1.666-2.262-1.666-3.731"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.562 16.242a1 1 0 0 1 1-1h.045a1 1 0 0 1 0 2h-.046a1 1 0 0 1-1-1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWorldLocationOutline;
