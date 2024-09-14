import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStickerPin2Bulk = ({
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
      d="M15.99 10.324h-3.24a.75.75 0 0 1 0-1.5h3.24a.75.75 0 0 1 0 1.5m-2.816 4.49H9.41a.75.75 0 0 1 0-1.5h3.763a.75.75 0 0 1 0 1.5m3.652-11.83h-6.552c-.144 0-.241.148-.197.285a3.02 3.02 0 0 1-.206 2.376.22.22 0 0 0 .027.247c.575.654.905 1.504.905 2.384 0 1.532-1.231 2.558-2.662 2.642a.23.23 0 0 0-.21.196 2.001 2.001 0 0 1-3.96 0 .22.22 0 0 0-.209-.193 4 4 0 0 1-.274-.015c-.125-.012-.24.083-.24.208v5.568c0 2.684 2.165 4.881 4.833 4.881h5.723a.494.494 0 0 0 .492-.497v-3.485c0-1.98 1.619-3.605 3.58-3.615h3.29a.483.483 0 0 0 .482-.487V7.844c0-2.684-2.154-4.86-4.822-4.86"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.16 7.62c.822-.46.978-.77 1.028-.87.221-.439.19-1.186.02-1.588-.038-.088-.153-.356-.708-.766a.27.27 0 0 1-.064-.29.27.27 0 0 1 .25-.168h2.532c.108 0 .208.067.246.164l.001.002c.04.103.016.218.011.23-.629.473-.744.742-.78.83-.169.397-.202 1.146.018 1.582.05.103.205.414 1.03.874.166.14.274.34.301.554H5.99a1 1 0 0 0-.078 0H3.86a.87.87 0 0 1 .3-.553M5.2 9.675v1.16a.75.75 0 0 0 1.5 0v-1.16h1.453c.771 0 1.398-.626 1.398-1.397 0-.734-.352-1.438-.942-1.883a1 1 0 0 0-.09-.059 4 4 0 0 1-.458-.29 1.4 1.4 0 0 1 .006-.25c.071-.07.211-.19.38-.32a1.76 1.76 0 0 0 .412-1.92 1.75 1.75 0 0 0-1.642-1.118H4.685a1.76 1.76 0 0 0-1.642 1.116c-.265.668-.102 1.422.485 1.982.11.082.235.19.306.258.011.077.014.184.014.244-.102.08-.296.205-.465.298a1 1 0 0 0-.09.059 2.37 2.37 0 0 0-.94 1.883c0 .77.625 1.397 1.396 1.397zM20.685 15.54c-.881-.003-1.92 0-2.666.008-1.185 0-2.162.986-2.162 2.183v2.853c0 .466.56.698.88.361l2.172-2.28 2.143-2.252a.516.516 0 0 0-.367-.873M15.99 10.324h-3.24a.75.75 0 0 1 0-1.5h3.24a.75.75 0 0 1 0 1.5m-2.816 4.49H9.41a.75.75 0 0 1 0-1.5h3.763a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStickerPin2Bulk;
