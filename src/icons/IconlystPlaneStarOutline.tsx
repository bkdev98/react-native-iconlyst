import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneStarOutline = ({
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
      d="M7.14 16.112a4.33 4.33 0 0 1-3.984-2.848l-.025-.054-.005-.012-.05-.115a94 94 0 0 1-.366-.882l-.15-.36a.75.75 0 1 1 1.384-.578l.151.366.13.312 1.711-.725 1.708-.725-1.957-4.74a.747.747 0 0 1 .441-.992q.271-.099.532-.2a10 10 0 0 1 1.291-.43 2.66 2.66 0 0 1 2.433.75c1.154 1.008 2.3 2.02 3.43 3.057l.006.01c.978-.426 1.995-.872 3.033-1.247a3.98 3.98 0 0 1 3 .01A2.33 2.33 0 0 1 21.041 8.2c.441 1.578-.768 2.89-2.078 3.441-3.084 1.3-6.4 2.691-9.769 4.041a5.5 5.5 0 0 1-2.055.43m-2.264-2.818c.856 1.32 2.118 1.656 3.765.995a585 585 0 0 0 9.744-4.03c.6-.254 1.427-.9 1.217-1.654a.84.84 0 0 0-.43-.562 2.47 2.47 0 0 0-1.81.068c-1.007.363-2.017.808-2.908 1.2a1.41 1.41 0 0 1-1.657-.27 175 175 0 0 0-3.4-3.034c-.542-.475-.872-.475-1.1-.419a8 8 0 0 0-.932.306l1.946 4.714a.75.75 0 0 1-.4.98c-.607.252-1.5.63-2.388 1.008-.57.245-1.149.488-1.647.698M16.596 21.169a1 1 0 0 1-.873-.51 1.03 1.03 0 0 1-.114-.647l.238-1.35-.988-.947a1 1 0 0 1-.01-1.42c.149-.143.336-.24.538-.277l1.387-.2.608-1.224a1 1 0 0 1 1.777-.028l.015.028.608 1.224 1.361.2c.258.037.491.173.651.378a.99.99 0 0 1-.11 1.335l-.97.938.235 1.34a1 1 0 0 1-1.446 1.052l-1.219-.64-1.224.642c-.144.07-.303.107-.464.106m1.456-.874.011.006zm.472 0-.01.006zm-1.879-2.94.435.418a1.01 1.01 0 0 1 .293.877l-.107.61.554-.29a1 1 0 0 1 .937.005l.536.28-.1-.591a.98.98 0 0 1 .3-.9l.426-.413-.605-.087a1 1 0 0 1-.754-.547l-.276-.556-.276.557a1.01 1.01 0 0 1-.742.544zm3.887 1.488-.01.012zm.133-.443v.007zm-.013-1.76-.015.015zM12.368 20.815H5.113a.75.75 0 0 1 0-1.5h7.255a.75.75 0 1 1 0 1.5"
    />
  </Svg>
);
export default IconlystPlaneStarOutline;
