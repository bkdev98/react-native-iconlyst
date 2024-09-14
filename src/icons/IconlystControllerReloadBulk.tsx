import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystControllerReloadBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M21.439 13.177c-.169-1.732-.683-7.002-3.303-8.406l-.012-.006c-.604-.302-2.441-1.221-4.589.023-1.427.893-1.818.81-3.178-.005-2.13-1.278-3.776-.432-4.478-.071l-.115.059C2.589 6.47 2.5 13.64 2.5 13.71c0 1.364.204 3.022 1.821 3.768.55.21 1.04.29 1.467.29.984 0 1.633-.424 1.903-.65.306-.22.551-.602.67-.863.719-1.578 1.839-2.797 3.639-2.797 1.818 0 2.881 1.268 3.645 2.848.115.239.38.598.664.812.914.652 2.103.782 3.371.36 1.632-.628 1.82-2.451 1.82-3.767 0-.048-.043-.344-.061-.535" />
      <Path d="M12.705 18.227c-.163.109-.419.174-.684.174-.524 0-.998-.418-1.054-.932a.75.75 0 1 0-1.491.165c.141 1.27 1.258 2.267 2.545 2.267.566 0 1.104-.152 1.516-.426a.75.75 0 1 0-.832-1.248M12.021 14.7c-.482 0-.993.176-1.516.525a.75.75 0 1 0 .832 1.248c.261-.174.51-.274.684-.274.524 0 .998.418 1.054.933a.75.75 0 0 0 1.491-.165c-.14-1.272-1.258-2.268-2.545-2.268" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.921 10.499a.78.78 0 0 1-.41.41c-.09.03-.19.05-.28.05-.2 0-.4-.08-.53-.22a.7.7 0 0 1-.17-.24 1 1 0 0 1-.05-.29c0-.2.08-.39.22-.53.2-.21.54-.27.81-.16.09.04.18.09.25.16a.75.75 0 0 1 .16.82m-1.4 1.4c-.04.09-.1.17-.16.24a.75.75 0 0 1-1.06 0 .8.8 0 0 1-.17-.24 1 1 0 0 1-.05-.29c0-.2.08-.39.22-.53.28-.28.77-.28 1.06 0 .14.14.22.34.22.53 0 .1-.02.2-.06.29m-2.09-.94a.75.75 0 0 1-.53-.22.8.8 0 0 1-.17-.24 1 1 0 0 1-.05-.29c0-.2.08-.39.22-.53.28-.28.77-.28 1.06 0 .14.14.22.34.22.53 0 .1-.02.2-.06.29s-.1.18-.16.24c-.14.14-.34.22-.53.22m.7-2.54c.04-.09.1-.17.17-.24.28-.28.78-.28 1.06 0a.75.75 0 1 1-1.28.53c0-.1.02-.19.05-.29M9.227 10.96h-.65v.65a.75.75 0 0 1-1.5 0v-.65h-.75a.75.75 0 0 1 0-1.5h.75v-.75a.75.75 0 0 1 1.5 0v.75h.65a.75.75 0 0 1 0 1.5M12.705 18.226c-.163.109-.419.174-.684.174-.524 0-.998-.418-1.054-.932a.75.75 0 1 0-1.491.165c.141 1.271 1.258 2.267 2.545 2.267.566 0 1.104-.152 1.516-.426a.75.75 0 1 0-.832-1.248M12.021 14.699c-.482 0-.993.177-1.516.526a.75.75 0 1 0 .832 1.248c.261-.174.51-.274.684-.274.524 0 .998.417 1.054.932a.75.75 0 0 0 1.491-.165c-.14-1.272-1.258-2.268-2.545-2.268"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystControllerReloadBulk;
